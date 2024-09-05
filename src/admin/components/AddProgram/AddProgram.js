import React, { useState } from 'react';

import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

import { db } from '../../../firebaseConfig';

import classes from './AddProgram.module.css';

const AddProgram = () => {
  const [programData, setProgramData] = useState({
    _id: '',
    programName: '',
    PEOs: [''],
    PLOs: [
      {
        ploId: '',
        ploLevel: '',
        ploDomain: '',
        ploDescription: '',
        ploHeading: '',
      },
    ],
  });

  const handleChange = (e) => {
    setProgramData({ ...programData, [e.target.name]: e.target.value });
  };

  const handlePEOChange = (index, e) => {
    const updatedPEOs = [...programData.PEOs];
    updatedPEOs[index] = e.target.value;
    setProgramData({ ...programData, PEOs: updatedPEOs });
  };

  const handlePLOChange = (index, e) => {
    const updatedPLOs = [...programData.PLOs];
    updatedPLOs[index] = {
      ...updatedPLOs[index],
      [e.target.name]: e.target.value,
    };
    setProgramData({ ...programData, PLOs: updatedPLOs });
  };

  const addPEOField = () => {
    setProgramData({ ...programData, PEOs: [...programData.PEOs, ''] });
  };

  const addPLOField = () => {
    setProgramData({
      ...programData,
      PLOs: [
        ...programData.PLOs,
        {
          ploId: '',
          ploLevel: '',
          ploDomain: '',
          ploDescription: '',
          ploHeading: '',
        },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'programs'), programData);
      console.log('Program added with ID: ', docRef.id);
    } catch (err) {
      console.error('Error adding program: ', err);
    }
  };

  const addPrograms = async () => {
    // Hardcoded programs to be added to Firestore
    const programsToAdd = [
      {
        _id: 'BCS',
        programName: 'Bachelor of Computer Science',
        PEOs: ['Provide strong CS foundation', 'Promote critical thinking'],
        PLOs: [
          {
            ploId: 1,
            ploLevel: 'Basic',
            ploDomain: 'Cognitive',
            ploDescription: 'Understanding core programming concepts',
            ploHeading: 'Introductory',
          },
          {
            ploId: 2,
            ploLevel: 'Intermediate',
            ploDomain: 'Cognitive',
            ploDescription: 'Building software development skills',
            ploHeading: 'Intermediate Software Skills',
          },
        ],
      },
      {
        _id: 'BBA',
        programName: 'Bachelor of Business Administration',
        PEOs: ['Develop business leaders', 'Enhance decision-making skills'],
        PLOs: [
          {
            ploId: 1,
            ploLevel: 'Basic',
            ploDomain: 'Cognitive',
            ploDescription: 'Understanding business fundamentals',
            ploHeading: 'Business Foundations',
          },
          {
            ploId: 2,
            ploLevel: 'Intermediate',
            ploDomain: 'Cognitive',
            ploDescription: 'Mastering management techniques',
            ploHeading: 'Managerial Skills',
          },
        ],
      },
      {
        _id: 'BSE',
        programName: 'Bachelor of Software Engineering',
        PEOs: ['Develop software professionals', 'Encourage collaboration'],
        PLOs: [
          {
            ploId: 1,
            ploLevel: 'Basic',
            ploDomain: 'Cognitive',
            ploDescription: 'Understanding software development life cycle',
            ploHeading: 'Software Life Cycle',
          },
          {
            ploId: 2,
            ploLevel: 'Advanced',
            ploDomain: 'Cognitive',
            ploDescription: 'Building enterprise-level applications',
            ploHeading: 'Enterprise Development',
          },
        ],
      },
      {
        _id: 'BME',
        programName: 'Bachelor of Mechanical Engineering',
        PEOs: [
          'Develop mechanical engineers',
          'Promote research in mechanical systems',
        ],
        PLOs: [
          {
            ploId: 1,
            ploLevel: 'Basic',
            ploDomain: 'Cognitive',
            ploDescription: 'Understanding mechanical systems',
            ploHeading: 'Mechanical Foundations',
          },
        ],
      },
      {
        _id: 'BEE',
        programName: 'Bachelor of Electrical Engineering',
        PEOs: [
          'Produce innovative electrical engineers',
          'Advance electrical systems research',
        ],
        PLOs: [
          {
            ploId: 1,
            ploLevel: 'Basic',
            ploDomain: 'Cognitive',
            ploDescription: 'Understanding electrical systems',
            ploHeading: 'Electrical Foundations',
          },
        ],
      },
      {
        _id: 'BCE',
        programName: 'Bachelor of Civil Engineering',
        PEOs: ['Develop civil engineers', 'Promote sustainable infrastructure'],
        PLOs: [
          {
            ploId: 1,
            ploLevel: 'Basic',
            ploDomain: 'Cognitive',
            ploDescription: 'Understanding civil engineering fundamentals',
            ploHeading: 'Civil Foundations',
          },
        ],
      },
    ];

    // Save each program to Firestore
    try {
      for (const program of programsToAdd) {
        await setDoc(doc(db, 'programs', program._id), program);
        console.log(`Program ${program.programName} added.`);
      }
      alert('ALL PROGRAMS ADDED SUCCESSFULLY');
    } catch (err) {
      alert(err.message);
      console.error('Error adding program: ', err);
    }
  };

  return (
    <div className={classes['form-container']}>
      <h2>Add New Program</h2>
      <button onClick={addPrograms} className={classes['submit-button']}>
        ADD PROGRAM
      </button>
      <form onSubmit={handleSubmit}>
        <div className={classes['section']}>
          <h3>Program Information</h3>
          <input
            type='text'
            name='_id'
            placeholder='Program ID (e.g., CS)'
            value={programData._id}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='programName'
            placeholder='Program Name (e.g., Computer Science)'
            value={programData.programName}
            onChange={handleChange}
            required
          />

          <h4>PEOs (Program Educational Objectives)</h4>
          {programData.PEOs.map((peo, index) => (
            <input
              key={index}
              type='text'
              placeholder={`PEO ${index + 1}`}
              value={peo}
              onChange={(e) => handlePEOChange(index, e)}
              required
            />
          ))}
          <button
            type='button'
            onClick={addPEOField}
            className={classes['add-button']}
          >
            Add PEO
          </button>

          <h4>PLOs (Program Learning Outcomes)</h4>
          {programData.PLOs.map((plo, index) => (
            <div key={index} className={classes['plo-section']}>
              <input
                type='number'
                name='ploId'
                placeholder='PLO ID'
                value={plo.ploId}
                onChange={(e) => handlePLOChange(index, e)}
                required
              />
              <input
                type='text'
                name='ploLevel'
                placeholder='PLO Level'
                value={plo.ploLevel}
                onChange={(e) => handlePLOChange(index, e)}
                required
              />
              <input
                type='text'
                name='ploDomain'
                placeholder='PLO Domain'
                value={plo.ploDomain}
                onChange={(e) => handlePLOChange(index, e)}
                required
              />
              <input
                type='text'
                name='ploDescription'
                placeholder='PLO Description'
                value={plo.ploDescription}
                onChange={(e) => handlePLOChange(index, e)}
              />
              <input
                type='text'
                name='ploHeading'
                placeholder='PLO Heading'
                value={plo.ploHeading}
                onChange={(e) => handlePLOChange(index, e)}
              />
            </div>
          ))}
          <button
            type='button'
            onClick={addPLOField}
            className={classes['add-button']}
          >
            Add PLO
          </button>
        </div>

        <button type='submit' className={classes['submit-button']}>
          Add Program
        </button>
      </form>
    </div>
  );
};

export default AddProgram;
