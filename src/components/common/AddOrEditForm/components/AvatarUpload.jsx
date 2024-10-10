import React from 'react'

export default function AvatarUpload({ avatar, onImageUpload }) {
  return (
    <div className="mb-4 text-center">
      <label htmlFor="avatarUpload">
      <img
          src={avatar || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="rounded-circle"
          style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }}
        />
      </label>
      <input
        type="file"
        id="avatarUpload"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={onImageUpload}
      />
    </div>
  )
}
