import React, { useState } from "react";
import { supabase } from "./supabaseClient";

const ImgApiTestPage = () => {
  const [uploading, setUploading] = useState(false);

  const [tempFileName, setTempFileName] = useState("");
  const [tempImageUrl, setTempImageUrl] = useState("");
  const [confirmImageUrl, setConfirmImageUrl] = useState("");

  // 임시 폴더에 파일 업로드
  const uploadTempImage = async event => {
    try {
      setUploading(true);

      const file = event.target.files[0];
      if (!file) return;

      const tempFilePath = `temp/${file.name}`;
      setTempFileName(file.name);

      const { data, error } = await supabase.storage
        .from("test_storage_img")
        .upload(tempFilePath, file);

      if (error) {
        throw error;
      }

      const { data: publicData, error: publicError } = supabase.storage
        .from("test_storage_img")
        .getPublicUrl(tempFilePath);

      if (publicError) {
        throw publicError;
      }

      console.log("Temporary Public URL:", publicData.publicUrl);
      setTempImageUrl(publicData.publicUrl || "");
    } catch (error) {
      console.error("Error uploading temp image:", error.message);
    } finally {
      setUploading(false);
    }
  };

  const fetchTempImage = async () => {
    try {
      if (!tempFileName) return;

      const filePath = `temp/${tempFileName}`;

      // Public URL 가져오기
      const { data: publicData, error: publicError } = await supabase.storage
        .from("test_storage_img")
        .getPublicUrl(filePath);

      if (publicError) {
        throw publicError;
      }

      console.log("Fetched Public URL:", publicData.publicUrl);
      setTempImageUrl(publicData.publicUrl || "");
    } catch (error) {
      console.error("Error fetching image:", error.message);
    }
  };

  // 파일을 임시 폴더에서 profile 폴더로 이동
  const confirmImage = async () => {
    try {
      if (!tempFileName) return;

      const tempFilePath = `temp/${tempFileName}`;
      const profileFilePath = `profile/${tempFileName}`;

      // 파일 복사
      const { data: moveData, error: moveError } = await supabase.storage
        .from("test_storage_img")
        .move(tempFilePath, profileFilePath);

      if (moveError) {
        throw moveError;
      }

      // 프로필 폴더의 URL을 가져오기
      const { data: profileData, error: profileError } = supabase.storage
        .from("test_storage_img")
        .getPublicUrl(profileFilePath);

      if (profileError) {
        throw profileError;
      }

      console.log("Profile Public URL:", profileData.publicUrl);
      setConfirmImageUrl(profileData.publicUrl);
      setTempImageUrl(""); // 임시 URL 초기화
      setTempFileName(""); // 임시 파일 이름 초기화
      alert("이미지 저장이 완료되었습니다.");
    } catch (error) {
      console.error("Error confirming image:", error.message);
    }
  };

  return (
    <div>
      <h1>Upload and Display Image</h1>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={uploadTempImage}
          disabled={uploading}
        />
      </div>
      {uploading && <p>Uploading...</p>}

      <hr style={{ marginTop: "40px" }}></hr>
      <div>
        <button onClick={fetchTempImage}>Temp Image 버튼</button>
      </div>
      <p>이미지 임시 url : {tempImageUrl}</p>

      {tempImageUrl && (
        <div>
          <img src={tempImageUrl} alt="Uploaded" style={{ width: "300px" }} />
        </div>
      )}

      <hr style={{ marginTop: "40px" }}></hr>
      <div>
        <button onClick={confirmImage}>Confirm Image 버튼</button>
      </div>
      <p>이미지 확정 url : {confirmImageUrl}</p>

      {confirmImageUrl && (
        <div>
          <img
            src={confirmImageUrl}
            alt="Uploaded"
            style={{ width: "300px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImgApiTestPage;
