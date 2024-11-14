<<<<<<< HEAD
import { api } from "./axios-setup"

export const formDataRequest = async (key, name, value) => {
  const formData = new FormData();
  
  if (value instanceof File || value instanceof Blob) {
    formData.append(name, value);
  } else {
    console.warn("O valor fornecido não é um arquivo válido.", value);
    return;
  }

  const request = await api.patch(key, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return request.data;
};
=======
import { api } from "./axios-setup"

export const formDataRequest = async (key, name, value) => {
  const formData = new FormData();
  
  if (value instanceof File || value instanceof Blob) {
    formData.append(name, value);
  } else {
    console.warn("O valor fornecido não é um arquivo válido.", value);
    return;
  }

  const request = await api.patch(key, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return request.data;
};
>>>>>>> fa7c29557efb1bc4884a0d8dc2c05fed89e4dab8
