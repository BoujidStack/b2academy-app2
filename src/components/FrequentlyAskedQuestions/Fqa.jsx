import React, { useState } from 'react';
import './FqaStyles.css';
import { useTranslation } from 'react-i18next';

const Fqa = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  const faqData = [
    {
      question: t('Fqa.question1'),
      answer: t('Fqa.answer1'),
    },
    {
      question: t('Fqa.question2'),
      answer: t('Fqa.answer2'),
    },
    {
      question: t('Fqa.question3'),
      answer: t('Fqa.answer3'),
    },
    {
      question: t('Fqa.question4'),
      answer: t('Fqa.answer4'),
    },
    {
      question: t('Fqa.question5'),
      answer: t('Fqa.answer5'),
    },
    {
      question: t('Fqa.question6'),
      answer: t('Fqa.answer6'),
    },
    {
      question: t('Fqa.question7'),
      answer: t('Fqa.answer7'),
    },
    {
      question: t('Fqa.question8'),
      answer: t('Fqa.answer8'),
    },
  ];

  return (
    <div className="faq-container" name="fqa">
      <div className="container-content">
        <h1 data-aos="fade-down" data-aos-duration="1000">{t('Fqa.title')}</h1>
        <div className="contact-us" data-aos="fade-down" data-aos-duration="500">
          {t('Fqa.description')}{' '}
          <a href="#" style={{ textDecoration: 'underline' }}>
            Discord.
          </a>
        </div>
        <div className="accordion">
          {faqData.map((item, index) => (
            <div
              className="accordion-item"
              key={index}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-duration="1000"
            >
              <button
                id={`accordion-button-${index}`}
                aria-expanded={expandedItem === index ? 'true' : 'false'}
                onClick={() => toggleAccordion(index)}
              >
                <span className="accordion-title">{item.question}</span>
                <span className="icon" aria-hidden="true"></span>
              </button>
              <div
                className={`accordion-content ${expandedItem === index ? 'expanded' : ''
                  }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fqa;
