"use client";

import Image from "next/image";
import { Upload } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { SPara } from "./typography";

type PassportUploadProps = {
  value?: File;
  onChange?: (file: File | undefined) => void;
  onBlur?: () => void;
  error?: string;
};

export default function PassportUpload({
  value,
  onChange,
  onBlur,
  error,
}: PassportUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(value);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      onChange?.(undefined);
      return;
    }

    onChange?.(file);
  };

  return (
    <div className="flex items-start gap-2">
      <div>
        <input
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          className="hidden"
          onChange={handleChange}
          onBlur={onBlur}
        />

        <button
          type="button"
          onClick={(e) => {
            const input = e.currentTarget
              .previousElementSibling as HTMLInputElement | null;

            input?.click();
          }}
          className="relative aspect-square w-48 overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:border-primary transition cursor-pointer"
        >
          {preview ? (
            <Image
              src={preview}
              alt="Passport preview"
              fill
              className="object-cover"
              unoptimized
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-500">
              <Upload className="h-8 w-8" />

              <div className="text-center">
                <p className="font-medium">Upload Passport</p>
                <p className="text-xs text-gray-400">PNG, JPG or WEBP</p>
              </div>
            </div>
          )}
        </button>

        {error && (
          <span className="text-red-700 font-semibold text-xs">{error}</span>
        )}
        <SPara className="font-normal text-center">
          Passport upload is optional
        </SPara>
      </div>
      {preview && (
        <span
          className="text-red-900 p-1 cursor-pointer"
          onClick={() => {
            onChange?.(undefined);
          }}
        >
          Remove passport
        </span>
      )}
    </div>
  );
}
