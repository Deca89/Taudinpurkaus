import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DiseaseDataService from '../services/disease.service';

const Disease = (props) => {
  const initialDiseaseState = {
    id: null,
    category: '',
    title: '',
    description: '',
  };
  const [currentDisease, setCurrentDisease] = useState(initialDiseaseState);
  const [message, setMessage] = useState('');
  const { t } = useTranslation();

  const getDisease = (id) => {
    DiseaseDataService.get(id)
      .then((response) => {
        setCurrentDisease(response.data);
      });
  };

  useEffect(() => {
    getDisease(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentDisease({ ...currentDisease, [name]: value });
  };

  const updateDisease = () => {
    DiseaseDataService.update(currentDisease.id, currentDisease)
      .then(() => {
        setMessage('Taudin tiedot päivitettiin!');
      });
  };

  const deleteDisease = () => {
    DiseaseDataService.delete(currentDisease.id)
      .then(() => {
        props.history.push('/diseases');
      });
  };

  return (
    <div>
      {currentDisease ? (
        <div className="edit-form">
          <h4>Disease</h4>
          <form>
            <div className="form-group">
              <label htmlFor="category">{t('category')}</label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={currentDisease.category}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">{t('title')}</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentDisease.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">{t('description')}</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentDisease.description}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button type="submit" className="badge badge-danger mr-2" onClick={deleteDisease}>
            {t('button_remove')}
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateDisease}
          >
            {t('button_update')}
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>{t('clickTheDisease')}</p>
        </div>
      )}
    </div>
  );
};

export default Disease;
