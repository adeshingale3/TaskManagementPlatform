# ResoluteAI - Support Ticket Management System

A modern ticket management system built with React and Firebase, featuring separate portals for customers and agents.

## 🚀 Features

- **User Authentication**
  - Separate login for customers and agents
  - Secure authentication using Firebase

- **Customer Portal**
  - Create support tickets
  - Track ticket status
  - View ticket history
  - Edit/Delete tickets

- **Agent Portal**
  - View all customer tickets
  - Update ticket status
  - Respond to tickets
  - Ticket management dashboard

## 🛠️ Technologies Used

- React.js
- Firebase (Authentication & Firestore)
- Tailwind CSS
- React Router DOM
- Headless UI

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ResoluteAI.git
cd ResoluteAI
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Firebase**
   - Create a new project in Firebase Console
   - Enable Authentication and Firestore
   - Create a `.env` file in the root directory with your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. **Start the development server**
```bash
npm run dev
```

## 📁 Project Structure

```plaintext
src/
├── components/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── PrivateRoute.jsx
│   ├── Dashboard/
│   │   ├── AgentDashboard.jsx
│   │   └── CustomerDashboard.jsx
│   ├── Ticket/
│   │   ├── TicketCard.jsx
│   │   └── TicketForm.jsx
│   ├── Layout/
│   │   └── Layout.jsx
│   └── Sidebar/
│       └── Sidebar.jsx
├── firebase.js
└── App.jsx
```

## 🔒 Authentication

The system supports two types of users:
- **Customers**: Can create and manage their tickets
- **Agents**: Can view and manage all tickets

## 💡 Usage

1. **Customer Flow**
   - Login as customer
   - Create new support tickets
   - View ticket status
   - Edit or delete tickets

2. **Agent Flow**
   - Login as agent
   - View all customer tickets
   - Update ticket status
   - Manage ticket responses

## 🎨 Styling

- Uses Tailwind CSS for styling
- Poppins font family
- Responsive design for all screen sizes
- Consistent color scheme throughout the application

## 🔧 Development

To run the development server:
```bash
npm run dev
```



