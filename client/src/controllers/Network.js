import { userHistory } from 'react-router-dom'

const server = 'http://localhost:4000'

export async function getRam () {
  let response = await fetch(`${server}/getAllRam`)
  response = await response.json()
  return response.Message
}

export async function getMotherboard () {
  let response = await fetch(`${server}/getAllMobo`)
  response = await response.json()
  return response.Message
}

export async function getCPU () {
  let response = await fetch(`${server}/getAllCpu`)
  response = await response.json()
  return response.Message
}

export async function getGPU () {
  let response = await fetch(`${server}/getAllGpu`)
  response = await response.json()
  return response.Message
}

export async function createComp (name, username, cpu, gpu, motherboard, ram, ccase) {
  const data = {
    memory: '1TB SSD',
    name: name,
    username: username,
    cpu_id: parseInt(cpu),
    gpu_id: parseInt(gpu),
    mobo_id: parseInt(motherboard),
    ram_id: parseInt(ram),
    case: ccase
  }
  const response = await fetch(`${server}/createComputer`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'

    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  })
  if (response.status === 400) alert('User could not be created')
  return response.status
}

export async function getAllComputers () {
  let response = await fetch(`${server}/getAllComputer`)
  response = await response.json()
  return response.Message
}

export async function getGpuStatistics () {
  let response = await fetch(`${server}/getByGpu`)
  response = await response.json()
  return response.Message
}
export async function getComputersByUser (user) {
  let response = await fetch(`${server}/getComputer`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ username: user })
  })
  console.log(user)
  response = await response.json()
  return response.Message
}
