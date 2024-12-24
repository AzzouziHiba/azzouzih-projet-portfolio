import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Master's student in Health Engineering with a specialization in Data Science in Health, passionate about applying data science to healthcare. I'm currently focused on analyzing patient data, particularly in the field of neuroscience and neuropsychology. My experience includes working with data management in neuropsychological assessments and healthcare, and I am interested in improving patient outcomes through data-driven decision-making.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
