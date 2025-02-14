import React from 'react';
import { auth, db } from '../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

const TicketCard = ({ ticket, onEdit, onDelete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this ticket?')) {
      try {
        await deleteDoc(doc(db, 'tickets', ticket.id));
        onDelete && onDelete(ticket.id);
      } catch (error) {
        console.error('Error deleting ticket:', error);
      }
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg">{ticket.title}</h3>
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
            {ticket.priority}
          </span>
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100">
            {ticket.category}
          </span>
        </div>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-2">{ticket.description}</p>
      <div className="flex flex-col gap-1 text-sm text-gray-500">
        <div className="flex justify-between">
          <span>Status: {ticket.status}</span>
          <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Contact: {ticket.contactEmail}</span>
          <span>Phone: {ticket.phone}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="space-x-2">
            <button
              onClick={() => onEdit && onEdit(ticket)}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
          {ticket.attachmentUrl && (
            <a
              href={ticket.attachmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Attachment
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;