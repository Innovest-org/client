import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../CustomButton/CustomButton';
import InputField from './InputField';
import AvatarUpload from './AvatarUpload';
import { registerUser, updateUser } from '../../../../Api/Endpoints/UserEndpoints';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../../../context/AppContext';
import { produce } from 'immer';


const MemberForm = ({onCancelForm, initialData, mode }) => {
   
  const {setEditingMember,editingMember,members, setMembers} = useContext(AppContext)
  const [formData, setFormData] = useState(initialData || {
    first_name: '',
    last_name: '',
    email: '',
    national_id: '',
    profile_image: '',
    id_doc: '',
    phone: '',
    username: '',
    role: 'INVESTOR',
    password: '',
  });
  const onCancel = ()=>{
    if(editingMember){
      setEditingMember?.(null)
    }else{
      onCancelForm()
    }
  }

  const [avatarUrl, setAvatarUrl] = useState('');
  const [documentUrl, setDocumentUrl] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.profile_image && formData.profile_image.size > 10 * 1024 * 1024) {
      toast.error('Avatar file size exceeds the limit of 10MB');
      return;
    }

    if (formData.id_doc && formData.id_doc.size > 10 * 1024 * 1024) {
      toast.error('Document file size exceeds the limit of 10MB');
      return;
    }

    const registerData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'profile_image' && formData.profile_image) {
        registerData.append(key, formData.profile_image);
      } else if (key === 'id_doc' && formData.id_doc) {
        registerData.append(key, formData.id_doc);
      } else {
        registerData.append(key, formData[key]);
      }
    });

    const editedData = {
      first_name: formData.first_name,
    last_name: formData.last_name,
    email: formData.email,
    national_id: formData.national_id,
    profile_image: formData.profile_image,
    id_doc: formData.id_doc,
    phone: formData.phone,
    username: formData.username,
    role: 'INVESTOR',
    password: formData.password,
    }

    try {
      let response;
      if (mode === 'edit') {
        response = await updateUser(formData.id, editedData);

        setMembers(produce(draft => {
          if(draft){
            const index = draft.findIndex((m) => m.id === editingMember.id);
            if (index > -1) {
              draft[index] = response.updatedUser;
            }
          }
        }))

        toast.success('Member updated successfully');
      } else {
        response = await registerUser(registerData);
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          national_id: '',
          profile_image: '',
          id_doc: '',
          phone: '',
          username: '',
          role: 'INVESTOR',
          password: '',
        });
        // toast.success('Member registered successfully');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Error response:', error.response);
        toast.error(`Failed to save member: ${error.response.data.message}`);
      } else {
        toast.error('Failed to save member. Please check the API or network connection.');
      }
    }finally{
      onCancel()
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profile_image: file });
        setAvatarUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDocumentUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, id_doc: file });
        setDocumentUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const inputFields = [
    { type: 'text', name: 'first_name', label: 'First Name', placeholder: 'Enter First Name', required: true },
    { type: 'text', name: 'last_name', label: 'Last Name', placeholder: 'Enter Last Name', required: true },
    { type: 'text', name: 'username', label: 'Username', placeholder: 'Enter Username', required: true },
    { type: 'text', name: 'national_id', label: 'National ID', placeholder: 'Enter National ID', required: true },
    { type: 'email', name: 'email', label: 'Email', placeholder: 'Enter Email', required: true },
    { type: 'text', name: 'role', label: 'Role', placeholder: 'Enter Role', required: true },
    { type: 'password', name: 'password', label: 'Password', placeholder: 'Enter Password', required: true },
    { type: 'phone', name: 'phone', label: 'Phone Number', placeholder: 'Enter Phone Number' },
  ];

  return (
    <div className="position-relative container">
      <h3 className="mb-4 ">{mode === 'edit' ? 'Edit Member' : 'Add New Member'}</h3>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <div className="position-absolute top-0 end-0 p-3">
          <FontAwesomeIcon
            icon={faTimes}
            style={{ cursor: 'pointer', fontSize: '24px', zIndex: 100 }}
            onClick={onCancel}
          />
        </div>

        <AvatarUpload profile_image={formData.profile_image} onImageUpload={handleImageUpload} />

        <div className="row">
          {inputFields.map((field) => (
            <div className="mb-3 col-md-6" key={field.name}>
              <InputField
                field={field}
                value={formData[field.name]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Document</label>
          <input
            type="file"
            className="form-control"
            onChange={handleDocumentUpload}
            accept=".jpg, .jpeg, .png, .pdf"
          />
        </div>

        <div className="d-flex justify-content-between mt-3">
          <CustomButton
            type="submit"
            text={mode === 'edit' ? 'Update Member' : 'Add Member'}
            className="btn btn-primary"
          />
          <CustomButton
            type="cancel"
            text="Cancel"
            onClick={onCancel}
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
