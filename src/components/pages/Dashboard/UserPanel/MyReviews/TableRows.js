import React from 'react';
import { FaRegTrashAlt} from 'react-icons/fa'
import UpdateReview from './UpdateReview';

const TableRows = ({review,services,handleDelete,handleUpdate}) => {

	const {_id, service_id, date, comment} = review

	const service = services?.find(srvc => srvc._id === service_id)
	console.log(service)


    return (
        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>{service?.title}</p>
					</td>
					<td className="p-3">
						<p>{comment}</p>
					</td>
					<td className="p-3">
						<p>{date}</p>
					</td>
					<td className="p-3 flex items-center justify-center gap-4 ">
						<UpdateReview review={review} handleUpdate={handleUpdate} />
						<FaRegTrashAlt className='hover:cursor-pointer hover:text-red-600' onClick={()=>handleDelete(_id)} />
					</td>
				
				
				</tr>
    );
};

export default TableRows;