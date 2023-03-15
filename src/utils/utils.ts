import Cipher from '@ibnlanre/cipher'

// import { liveData } from '../../data/liveData'


const encryption_key = process.env.REACT_APP_KEY as string
const initialization_vector = process.env.REACT_APP_VECTOR as string

export const cipher = new Cipher({
  initialization_vector,
  algorithm: 'aes-256-cbc',
  output_decoding: 'base64',
  input_encoding: 'utf-8',
  encryption_key,
})
