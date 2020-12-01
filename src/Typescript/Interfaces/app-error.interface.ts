import React from 'react';
import {ErrorMessageType} from '../Types';

export interface AppErrorInterface {
  messages: ErrorMessageType;
  code: number;
  close?: boolean;
  button?: React.ReactElement[];
  title: string;
}
