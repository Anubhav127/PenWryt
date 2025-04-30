import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  const editorConfig = {
    height: 500,
    menubar: true,
    skin: "oxide-dark",
    content_css: "dark",
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "help",
      "wordcount"
    ],
    toolbar: [
      "undo redo",
      "blocks",
      "image",
      "bold italic forecolor",
      "alignleft aligncenter alignright alignjustify",
      "bullist numlist outdent indent",
      "removeformat",
      "help"
    ].join(" | "),
    content_style: `
      body {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        line-height: 1.6;
        color: #ffffff;
        background-color: #1f2937;
      }
    `,
    branding: false,
    promotion: false,
    resize: true,
    statusbar: true
  };

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-200 mb-1">
          {label}
        </label>
      )}

      <div className="border border-gray-600 rounded-lg overflow-hidden bg-gray-800">
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey={"f447j0gi1ex42mib8d1t2b01e4o6gjunq2fvjgm8mak1496r"}
              initialValue={defaultValue}
              init={{
                ...editorConfig,
                initialValue: defaultValue,
                setup: (editor) => {
                  editor.on("init", () => {
                    editor.getContainer().style.transition = "border-color 0.2s ease-in-out";
                  });
                }
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  );
}
