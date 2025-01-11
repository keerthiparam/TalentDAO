import { TriangleIcon } from './TriangleIcon'

interface JobCardProps {
  job: {
    id: number
    title: string
    company: string
    duration: string
    image: string
    details: string
    price: number
    rating: number
    reviews: number
  }
}

function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
      <img src={job.image} alt={job.title} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-bold">{job.title}</h3>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-600">{job.duration}</p>
      </div>
      <div className="ml-auto flex items-center">
        <p className="ml-auto font-bold">{job.price} ETH</p>
        <div className="ml-2 flex items-center">
          <TriangleIcon className="text-green-500 fill-green-500" />
          <span className="text-gray-600 ml-1">{job.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default JobCard;

