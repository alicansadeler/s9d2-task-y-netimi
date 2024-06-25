import React from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

export default function TaskHookForm({ kisiler, submitFn }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  function mySubmit(data) {
    submitFn({
      ...data,
      id: nanoid(5),
      status: 'yapılacak',
    });
    toast.success(data.title + ' başarıyla eklendi');
    reset({
      title: '',
      description: '',
      deadline: '',
    });
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit(mySubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input
          className="input-text"
          {...register('title', { required: 'Task başlığı yazmalısınız' })}
          id="title"
          name="title"
          type="text"
        />
        {errors.title && <p className="input-error">{errors.title.message}</p>}
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          {...register('description', {
            required: 'Task açıklaması yazmalısınız',
            minLength: {
              value: 10,
              message: 'Task açıklaması en az 10 karakter içermelidir',
            },
          })}
          rows="3"
          id="description"
          name="description"
        ></textarea>
        {errors.description && (
          <p className="input-error">{errors.description.message}</p>
        )}
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                {...register('people', {
                  required: 'Lütfen en az 1 kişi seçin',
                  validate: {
                    maxKisi: (value) =>
                      value.length < 3 || 'En fazla 3 kişi seçebilirsiniz',
                  },
                })}
                type="checkbox"
                name="people"
                value={p}
              />
              {p}
            </label>
          ))}
        </div>
        {errors.people && (
          <p className="input-error">{errors.people.message}</p>
        )}
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="deadline">
          Son teslim
        </label>
        <input
          className="input-text"
          {...register('deadline', {
            required: 'Son teslim tarihi seçmelisiniz',
          })}
          id="deadline"
          name="deadline"
          type="date"
          min="2023-01-25"
        />
        {errors.deadline && (
          <p className="input-error">{errors.deadline.message}</p>
        )}
      </div>

      <div className="form-line">
        <button className="submit-button" type="submit" disabled={!isValid}>
          Kaydet
        </button>
      </div>
    </form>
  );
}
