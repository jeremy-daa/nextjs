"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
const Editor = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [media, setMedia] = useState("");
  const [categories, setCategories] = useState("");
  useEffect(() => {
    const upload = () => {
      if (!file) return;
      const name = new Date().getTime + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);
  const slugify = (str: string) => {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++)
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes
    return str;
  };
  const handleSubmit = async () => {
    if (!title || !value || !categories) return;
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: categories,
      }),
    });
    if (res.ok) {
      alert("Post created successfully");
      setValue("");
      setTitle("");
      setCategories("");
      setMedia("");
    }
  };
  return (
    <div className="w-full">
      <div className="flex gap-3 justify-between items-center">
        <input
          type="text"
          className="outline-none text-4xl bg-transparent mb-6 mt-16"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full flex">
        <div
          className="relative rounded-full overflow-hidden border-2 border-solid border-[rgb(23,23,39)] p-1 h-8 w-8 bg-transparent"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Image src={"/plus.svg"} alt="" fill />
        </div>

        <div className="flex ml-8 overflow-hidden">
          <div
            className={`flex justify-center items-center gap-5 ${
              open ? "-translate-x-[0%]" : "-translate-x-[100%]"
            } duration-300`}
          >
            <div className="relative rounded-full overflow-hidden border-2 border-solid border-[rgb(23,23,39)] p-4 h-8 w-8 bg-white flex justify-center items-center">
              <input
                type="file"
                name="image"
                hidden
                id="image"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  // Check if a file is selected
                  if (file) {
                    const reader = new FileReader();

                    // Set up a function to be executed when the file is successfully read
                    reader.onloadend = () => {
                      // Get the file type from the result
                      const fileExt = reader.result as string;
                      const fileType = fileExt?.split(";")[0]?.split(":")[1];

                      // Check if the file type indicates an image (you can customize this check based on your requirements)
                      if (fileType && fileType.includes("image")) {
                        // If it's an image, set the state with the file
                        setFile(file);
                      } else {
                        // If it's not an image, you can handle it accordingly (e.g., show an error message)
                        alert("Please select a valid image file.");
                        // Optionally, you can reset the file input value
                        e.target.value = "";
                      }
                    };

                    // Read the content of the file as a data URL
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <button className="relative overflow-hidden p-3 h-4 w-4 bg-white">
                <label htmlFor="image">
                  <Image src={"/photo.svg"} alt="" fill />
                </label>
              </button>
            </div>
            {/* <div className="relative rounded-full overflow-hidden border-2 border-solid border-[rgb(23,23,39)] p-4 h-8 w-8 bg-white flex justify-center items-center">
              <input
                type="file"
                hidden
                id="image"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setFile(file || null);
                }}
              />
              <button className="relative overflow-hidden p-3 h-4 w-4 bg-white translate-x-[1px]">
                <Image src={"/video.svg"} alt="" fill />
              </button>
            </div> */}
            {/* <div className="relative rounded-full overflow-hidden border-2 border-solid border-[rgb(23,23,39)] p-4 h-8 w-8 bg-white flex justify-center items-center">
              <button className="relative overflow-hidden p-3 h-4 w-4 bg-white">
                <Image src={"/file.svg"} alt="" fill />
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-[150px]">
        <select
          name="Categories"
          id="categories"
          className="w-full text-[var(--text)] h-10 bg-[var(--bg)] rounded-sm border-2 border-solid border-[rgb(23,23,39)] mt-8"
          onChange={(e) => setCategories(e.target.value)}
        >
          <option value="" disabled selected>
            Select Category
          </option>
          <option value="fashion">Fashion</option>
          <option value="culture">Culture</option>
          <option value="coding">Coding</option>
          <option value="food">Food</option>
          <option value="style">Style</option>
          <option value="travel">Travel</option>
        </select>
      </div>
      <div className="w-full py-5 min-h-[200px]">
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story ..."
        />
      </div>
      <button
        className="w-[80%] px-5 py-2 h-10 bg-red-800 rounded-sm flex justify-center items-center md:mr-3 text-white mr-0"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default Editor;
