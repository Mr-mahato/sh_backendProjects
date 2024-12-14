import ArticleManipulation from '@/Component/ArticleManipulation'
import React from 'react'

function CreateBlog() {
  return (
    <div className='min-h-screen p-4'>
        <ArticleManipulation text={"New"} btn={"Publish"}/>
    </div>
  )
}

export default CreateBlog