import React from 'react'
import { QuestionCardType } from '@/types/question-card.type'

export default function QuestionTab({
    title,
    status,
    acceptance,
    difficulty

}: QuestionCardType) {
  return (
    <li className='flex justify-between items-center px-2 py-4'>
        <div className='status max-w-15'>
            {status}
        </div>

        <div className='title'>
            {title}
        </div>

        <div className='acceptence'>
            {acceptance}%
        </div>

        <div className='difficulty'>
            {difficulty}
        </div>  
    </li>
  )
}
