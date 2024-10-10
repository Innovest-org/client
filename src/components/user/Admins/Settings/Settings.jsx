import React, { useState } from 'react';
import CustomButton from '../../../common/CustomButton/CustomButton';
import './style.css';

const WebsiteSettingsPage = () => {
  const [settingsData, setSettingsData] = useState({
    logo: '',
    websiteName: '',
    timeZone: 'UTC',
    languages: [],
  });

  const [availableLanguages] = useState(['English', 'Spanish', 'French', 'German', 'Chinese']);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettingsData({ ...settingsData, [name]: value });
  };

  const handleLanguageChange = (e) => {
    const { value } = e.target;
    if (selectedLanguages.includes(value)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== value));
    } else {
      setSelectedLanguages([...selectedLanguages, value]);
    }
    setSettingsData({ ...settingsData, languages: selectedLanguages });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSettingsData({ ...settingsData, logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Website settings submitted", settingsData);
  };

  return (
    <div className="container website-settings-page">
      <h2 className="mb-4">Website Settings</h2>
      <form onSubmit={handleSubmit} className="border rounded p-4 shadow-sm">
        <div className="mb-4 text-center">
          <label htmlFor="logoUpload">
            <img
              src={settingsData.logo || 'https://via.placeholder.com/150'}
              alt="Website Logo"
              className="rounded-circle"
              style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }}
            />
          </label>
          <input
            type="file"
            id="logoUpload"
            accept="image/*"
            style={{ display: 'none' }} // Hidden input
            onChange={handleLogoUpload}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="websiteName" className="form-label">Website Name</label>
          <input
            type="text"
            className="form-control"
            id="websiteName"
            name="websiteName"
            value={settingsData.websiteName}
            onChange={handleSettingsChange}
            placeholder="Enter Website Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="timeZone" className="form-label">Time Zone</label>
          <select
            id="timeZone"
            name="timeZone"
            className="form-select"
            value={settingsData.timeZone}
            onChange={handleSettingsChange}
            required
          >
            <option value="UTC">UTC</option>
            <option value="GMT">GMT</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Languages</label>
          <div>
            {availableLanguages.map((lang) => (
              <div key={lang} className="form-check">
                <input
                  type="checkbox"
                  id={lang}
                  value={lang}
                  checked={selectedLanguages.includes(lang)}
                  onChange={handleLanguageChange}
                  className="form-check-input"
                />
                <label htmlFor={lang} className="form-check-label">{lang}</label>
              </div>
            ))}
          </div>
        </div>

        <CustomButton type="submit" text="Save Settings" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default WebsiteSettingsPage;
