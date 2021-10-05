/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import CurrencyInput from 'react-currency-input-field';
import ImageUploading from 'react-images-uploading';
import FormStyle from '../styles/components/form';
import ProgressBar from './Progress';
import useLocalStorage from '../hooks/useLocalStorage';
import useProgressBar from '../hooks/useProgressBar';

const Form = ({
  template: { title, fields }, onSubmit, watchFields, validate,
}) => {
  const [data, setData] = useLocalStorage('dataForm', {});
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList) => {
    setImages(imageList);
  };

  const handleChange = (event) => setData((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));

  const { register, handleSubmit, errors, watch, setError, clearErrors } = useForm();

  const watchValues = watch(watchFields);
  const progress = useProgressBar();

  validate(watchValues, { errors, setError, clearErrors });

  const renderFields = (fields) => fields.map(({ title, type, name, validationProps, value, dynamic }) => {
    const showField = dynamic
      ? watchValues[dynamic.field] === dynamic.value
      : true;

    if (!showField) return null;

    switch (type) {
      case 'text':
        return (
          <div key={name}>
            <label htmlFor={name}>{title}</label>
            <input
              placeholder={name}
              type={type}
              name={name}
              id={name}
              value={data[name] || ''}
              onChange={handleChange}
              ref={register(validationProps)}
            />
            {errors[name] && (
            <span>{errors[name].message}</span>
            )}
          </div>
        );
      case 'number':
        return (
          <div key={name}>
            <label htmlFor={name}>{title}</label>
            <input
              placeholder={name}
              type={type}
              name={name}
              id={name}
              min={validationProps.min}
              max={validationProps.max}
              value={data[name] || ''}
              onChange={handleChange}
              ref={register(validationProps)}
            />
            {errors[name] && (
            <span>{errors[name].message}</span>
            )}
          </div>
        );
      case 'email':
        return (
          <div key={name}>
            <label htmlFor={name}>{title}</label>
            <input
              placeholder={name}
              type={type}
              name={name}
              id={name}
              value={data[name] || ''}
              onChange={handleChange}
              ref={register(validationProps)}
            />
            {errors[name] && (
            <span>{errors[name].message}</span>
            )}
          </div>
        );
      case 'checkbox':
        return (
          <div key={name}>
            <label htmlFor={name}>
              <input
                placeholder={name}
                type={type}
                name={name}
                id={name}
                value={value || ''}
                onChange={handleChange}
                ref={register(validationProps)}
              />
              {title}
            </label>
          </div>
        );
      case 'url':
        return (
          <div key={name}>
            <label htmlFor={name}>{title}</label>
            <input
              placeholder={name}
              type={type}
              name={name}
              id={name}
              value={data[name] || ''}
              onChange={handleChange}
              ref={register(validationProps)}
            />
            {errors[name] && (
            <span>{errors[name].message}</span>
            )}
          </div>
        );
      case 'currency':
        return (
          <div key={name}>
            <label htmlFor={name}>{title}</label>
            <CurrencyInput
              id={name}
              name={name}
              placeholder="$000,000.000"
              intlConfig={{ locale: 'es-CO', currency: 'COP' }}
              prefix="$"
              defaultValue={0}
              decimalsLimit={2}
              onChange={handleChange}
              ref={register(validationProps)}
            />
            {errors[name] && (
            <span>{errors[name].message}</span>
            )}
          </div>
        );
      case 'image':
        return (
          <div key={name}>
            <label htmlFor={name}>{title}</label>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
              ref={register(validationProps)}
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div>
                  <button
                    style={isDragging ? { color: 'red' } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Subir imagen
                  </button>
                  {imageList.map((image, index) => (
                    <div key={index}>
                      <img src={image.data_url} alt="" width="100" />
                      <div>
                        <button onClick={() => onImageUpdate(index)}>Actualizar imagen</button>
                        <button onClick={() => onImageRemove(index)}>Remover imagen</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
            {errors[name] && (
            <span>{errors[name].message}</span>
            )}
          </div>
        );
      default:
        return (
          <div key={name}>
            <span>Invalid Field</span>
          </div>
        );
    }
  });

  return (
    <FormStyle>
      <header>
        <div className="header__hero">
          <Link to="/">Hero</Link>
        </div>
        <h4>Subiendo todos los datos</h4>
        <ProgressBar width="100%" value={progress} max={100} />
      </header>
      <div className="container__form">
        <div className="layout__form">
          <div className="column column__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h4>{title}</h4>
              {renderFields(fields)}
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="column column__form">
            <div className="pre-container">
              {Object.keys(data).map((key, i) => (
                <div key={i} className="pre-space">
                  <span className="pre-value">
                    {data[key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FormStyle>
  );
};

export default Form;
