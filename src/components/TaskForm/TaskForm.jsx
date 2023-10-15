import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  AddTaskButton,
  BoxInput,
  BtnWrapper,
  CancelButton,
  CheckedRadioBtnBlue,
  CheckedRadioBtnRed,
  CheckedRadioBtnYellow,
  Error,
  FormContainer,
  FormElement,
  FormField,
  FormLabel,
  HighPrioBtn,
  LowPrioBtn,
  MidPrioBtn,
  PriorityWrapper,
  RadioBtn,
  RadioLabelStyled,
  TimeFieldWrap,
  TimeInput,
  TimeWrapper,
} from './TaskForm.styled';
import sprite from '../Pictures/sprite.svg';
import { addNewTask, updateTask } from 'api-services/tasks-api';

const TaskForm = ({ closeModal, task }) => {
  const { title, start, end, priority } = task;

  let taskSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Task name too short')
      .max(60, 'Task name too long.')
      .required('Task name is required'),
    start: Yup.string().required('Start time is required'),
    end: Yup.string()
      .required('End time is required')
      .test(
        'is-greater',
        'End time must be greater than start time',
        function (end) {
          const start = this.parent.start;
          return !start || !end || start < end;
        }
      ),
    priority: Yup.string()
      .oneOf(['low', 'medium', 'high'])
      .required('Priority is required'),
  });

  const onTaskSubmit = values => {
    const newTask = { ...task, ...values };
    task.id ? updateTask(newTask) : addNewTask(newTask);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={
          task.id
            ? { title, start, end, priority }
            : { title: '', start: '09:00', end: '10:00', priority: 'low' }
        }
        validationSchema={taskSchema}
        onSubmit={async values => {
          onTaskSubmit(values);
        }}
      >
        {({ values, errors, touched }) => {
          return (
            <FormElement>
              <FormLabel htmlFor="title">Title</FormLabel>
              <BoxInput>
                <FormField
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Enter text"
                />
                {errors.title && touched.title ? (
                  <Error>{errors.title}</Error>
                ) : null}
              </BoxInput>
              <TimeWrapper>
                <TimeFieldWrap>
                  <FormLabel htmlFor="start">Start</FormLabel>
                  <TimeInput
                    id="start"
                    type="time"
                    step="60"
                    name="start"
                  ></TimeInput>
                  {errors.start && touched.start ? (
                    <Error>{errors.start}</Error>
                  ) : null}
                  {!errors.start && errors.end && touched.end ? (
                    <Error>{errors.end}</Error>
                  ) : null}
                </TimeFieldWrap>
                <TimeFieldWrap>
                  <FormLabel htmlFor="end">End</FormLabel>
                  <TimeInput id="end" type="time" name="end"></TimeInput>
                </TimeFieldWrap>
              </TimeWrapper>
              <PriorityWrapper role="group" id="priority-group">
                <RadioLabelStyled>
                  <RadioBtn type="radio" name="priority" value="low" />
                  <CheckedRadioBtnBlue />
                  <LowPrioBtn />
                  Low
                </RadioLabelStyled>
                <RadioLabelStyled>
                  <RadioBtn
                    type="radio"
                    name="priority"
                    value="medium"
                  ></RadioBtn>
                  <CheckedRadioBtnYellow />
                  <MidPrioBtn /> Medium
                </RadioLabelStyled>
                <RadioLabelStyled>
                  <RadioBtn
                    type="radio"
                    name="priority"
                    value="high"
                  ></RadioBtn>
                  <CheckedRadioBtnRed />
                  <HighPrioBtn /> High
                </RadioLabelStyled>
              </PriorityWrapper>
              <BtnWrapper>
                <AddTaskButton type="submit">
                  {task.id ? (
                    <svg width="18" height="18" style={{ marginRight: 8 }}>
                      <use href={sprite + '#edit-btn'}></use>
                    </svg>
                  ) : (
                    <svg width="18" height="18" style={{ marginRight: 8 }}>
                      <use href={sprite + '#icon-plus'}></use>
                    </svg>
                  )}
                  {task.id ? 'Edit' : 'Add'}
                </AddTaskButton>
                <CancelButton onClick={closeModal}>Cancel</CancelButton>
              </BtnWrapper>
            </FormElement>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default TaskForm;
