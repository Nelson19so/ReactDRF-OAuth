# 🔐 DRF Authentication API with React Frontend (`drfr_auth`)

A Django REST Framework-based authentication system with a custom user model using email login and frontend integration via `fetch()` in React.

---

## 🚀 Features

- ✅ Register with email, name, password (password1/password2)
- ✅ Login with email and password
- ✅ React `fetch()` API integration
- ✅ Secure password handling
- ✅ Custom error messages and validations
- 🛡️ Google/social login support (optional)
- 🔐 JWT-ready and session-ready
- 🧪 API-friendly for frontend frameworks

---

## 🛠️ Tech Stack

- Django 5.x
- Django REST Framework
- dj-rest-auth
- django-allauth
- React (Frontend)
- PostgreSQL (or SQLite)

---

## 📁 Project Structure
```
DEF-OAUTH/
├── authentication/ # Custom app for user auth
│ ├── models.py # Custom user model (email login)
│ ├── serializers.py # Register/Login serializers
│ ├── views.py # Optional custom views
│ └── forms.py # Django Forms (for admin use)
├── core/ # Django root
│ └── settings.py # Backend configuration
├── REACT-OAuth/ # React frontend folder


yaml
Copy
Edit
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
https://github.com/Nelson19so/ReactDRF-OAuth.git
cd ReactDRF-OAurh
``` 
### 2. Backend Setup


- ✅ Create a virtual environment:
```bash
bash
Copy
Edit

python -m venv env
source env/bin/activate  # Windows: env\Scripts\activate
```


- ✅ Install requirements:
```bash
bash
Copy
Edit

pip install -r requirements.txt
```

- ✅ Add .env:
```
env
Copy
Edit

SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost

DATABASE_URL=sqlite:///db.sqlite3
```

- ✅ Run migrations:
```bash
bash
Copy
Edit

python manage.py makemigrations
python manage.py migrate
```

- ✅ Start the backend server:
```bash
bash
Copy
Edit

python manage.py runserver
```

- 🌐 API Endpoints
Method	Endpoint	Description
```bash
POST	/auth/registration/	Register a new user
POST	/auth/login/	Login user
POST	/auth/logout/	Logout user
```


### 💻 React Frontend Integration (fetch())

- 🔐 Register User
```bash
js
Copy
Edit

fetch("http://127.0.0.1:8000/auth/registration/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "user@example.com",
    Name: "John Doe",
    password1: "SecurePassword123",
    password2: "SecurePassword123",
    terms_accepted: true,
  }),
})
  .then(res => res.json())
  .then(data => {
    if (data.key) {
      localStorage.setItem("authToken", data.key);
      alert("Registration successful!");
    } else {
      console.log("Error:", data);
    }
  });
```


- 🔑 Login User
```bash
js
Copy
Edit

fetch("http://127.0.0.1:8000/auth/login/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "user@example.com",
    password: "SecurePassword123",
  }),
})
  .then(res => res.json())
  .then(data => {
    if (data.key) {
      localStorage.setItem("authToken", data.key);
      alert("Login successful!");
    } else {
      console.log("Login failed:", data);
    }
  });
```


- 🚪 Logout User
```bash
js
Copy
Edit

fetch("http://127.0.0.1:8000/auth/logout/", {
  method: "POST",
  headers: {
    Authorization: `Token ${localStorage.getItem("authToken")}`,
  },
});
``` 


- 🧠 Notes
Backend requires fields like Name, email, password1, password2, terms_accepted

- Custom user model uses email as the login field

- Passwords must match and meet Django password validators

- JWT support can be added with dj-rest-auth[jwt]

- ✅ TODO
 Add JWT authentication

- Add email verification (with SendGrid or console backend)

Deploy on Render / Vercel

### 🧑‍💻 Author
- Nelson Junior

- GitHub: @Nelson19so

- LinkedIn: Nelson Junior

