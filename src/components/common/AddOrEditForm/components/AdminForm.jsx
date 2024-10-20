import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../CustomButton/CustomButton';
import InputField from './InputField';
import AvatarUpload from './AvatarUpload';
import { updateAdmin, createAdmin } from '../../../../Api/Endpoints/AdminEndpoints';
import { getAllCommunities } from '../../../../Api/Endpoints/CommunityEndpoints';
import { produce } from 'immer';
import { AppContext } from '../../../../context/AppContext';
import { toast } from 'react-toastify';
import {motion} from 'framer-motion'
const AdminForm = ({ onCancel, initialData, mode, fetchAdmins,setIsAddingAdmin }) => {
  const [formData, setFormData] = useState(initialData || {
    communities: [],
    password: '',
    email: '',
    profile_image: '',
    username: '',
    role: 'ADMIN',
  });
  const {setAdmins} = useContext(AppContext)
  const [communities, setCommunities] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const fetchedCommunities = await getAllCommunities();

        if (Array.isArray(fetchedCommunities.communities)) {
          setCommunities(fetchedCommunities.communities);
        } else {
          console.error('Fetched communities data is not an array or missing:', fetchedCommunities.communities);
        }
      } catch (error) {
        console.error('Error fetching communities:', error);
      }
    };
    fetchCommunities();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (Array.isArray(formData[name])) {
      const newValues = formData[name].includes(value)
        ? formData[name].filter(item => item !== value)
        : [...formData[name], value];
      setFormData({ ...formData, [name]: newValues });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === 'edit') {
        const res = await updateAdmin(formData.admin_id, formData);
        setAdmins(produce(draft=>{
          const index = draft.findIndex((admin)=>admin.admin_id === formData.admin_id)
          if(index !== -1){
            draft[index] = res.admin;
          }
        }))
        toast.success('Admin updated successfully');
      } else if (mode === 'add') {
        const admin  = await createAdmin(formData);
        setAdmins(produce(draft=>{
          draft.push(admin)
        }))
        toast.success('New admin created successfully');
      }

      if (fetchAdmins) {
        fetchAdmins();
      }
    } catch (error) {
      toast.success(error);
    }finally{
      if(mode === 'edit'){
        onCancel()
      }else{
        setIsAddingAdmin(false)
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profile_image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputFields = [
    {
      type: 'text',
      name: 'username',
      label: 'Username',
      placeholder: 'Enter Username',
      required: true,
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Enter Email',
      required: true,
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      required: true,
      showPassword: showPassword,
      onTogglePassword: togglePasswordVisibility,
    },
    {
      type: 'select',
      name: 'communities',
      label: 'Communities',
      options: communities.map(community => ({
        value: community.community_id,
        label: community.community_name
      })),
      placeholder: 'Select Communities',
      multiple: true,
    },
  ];

  return (
    <motion.div initial={{ scale:0 }} animate={{scale:1}} exit={{scale:0}} className="position-relative container">
      <h3 className="mb-4 ">{mode === 'edit' ? 'Edit Admin' : 'Add New Admin'}</h3>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <div className="position-absolute top-0 end-0 p-3">
          <FontAwesomeIcon
            icon={faTimes}
            style={{ cursor: 'pointer', fontSize: '24px', zIndex: 100 }}
            onClick={onCancel}
          />
        </div>

        <AvatarUpload
          avatar={formData.profile_image}
          onImageUpload={handleImageUpload}
        />

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

        <div className="d-flex justify-content-between mt-3">
          <CustomButton text={mode === 'edit' ? 'Edit Admin' : 'Add New Admin'} className="btn btn-primary" />
          <CustomButton text="Cancel" onClick={(e) => { e.preventDefault(); onCancel(); }} />
        </div>
      </form>
    </motion.div>
  );
};

export default AdminForm;
