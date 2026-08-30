# SiPhBioLabChip — Silicon Photonics Bio-Optical Diagnostic Platform

**SiPhBioLabChip** is an enterprise bio-optical diagnostic and microfluidic assay platform powered by semiconductor silicon photonics (SiPh) ring resonators. It enables real-time, label-free kinetic rate constant measurement ($\text{K}_{\text{on}}$, $\text{K}_{\text{off}}$, $\text{K}_{\text{d}}$) and high-density multiplex paneling for clinical reference laboratories, biopharma CROs, and decentralized clinical trials.

---

## 🔬 Core Platform Features

- **Label-Free Optical Ring Resonance**: Real-time kinetic affinity measurement down to $2.4 \times 10^{-11} \text{ M}$ without fluorescent dye interference.
- **Multiplex Microfluidic Cartridges**: 24-analyte diagnostic arrays (autoimmune, cardiac, oncology, cytokines).
- **Strict Tiered Monthly Subscriptions**:
  - **Starter Plan** ($100 / mo): 25 Cartridges/mo + 1 SiPhBio™ Bio-Analyzer License
  - **Pro Clinical Plan** ($200 / mo): 100 Cartridges/mo + Priority Cartridge Foundry
  - **Enterprise Plan** ($300 / mo): 300 Cartridges/mo + Custom Biochip Foundry & Dedicated Engineer
- **Single Monthly Payment Protection**: 30-day active billing window (`is_subscription_active()`). Paid users submit unlimited custom biochip service requests without duplicate charges.
- **Dual Persistence Architecture**: Primary relational storage via Django SQLite ORM with automatic fail-soft replication to MongoDB Cloud Atlas (`siphbiolabchip_db`).
- **Executive Admin Analytics**: Real-time monitoring of active analyzers online, deployed biochips, subscriber revenue, and live system telemetry logs.
- **iOS / Android Mobile & Desktop Responsiveness**: Built with responsive layouts and safe area inset support (`var(--sat)`, `var(--sab)`).

---

## 🛠️ Architecture & Tech Stack

- **Frontend**: React 18, Vite 5, Lucide Icons, Custom CSS Design System, Axios, React Context Toast Notifications
- **Backend**: Python 3.12, Django 5, Django REST Framework, MongoDB Atlas Sync via PyMongo
- **Database**: SQLite3 (Local Primary) & MongoDB Cloud Atlas (Cloud Replication)

---

## 🚀 Quickstart Guide

### 1. Backend Setup (Django)
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate | Linux/macOS: source venv/bin/activate
pip install django djangorestframework django-cors-headers pymongo
python manage.py migrate
python manage.py runserver 8002
```
*Backend server runs on `http://127.0.0.1:8002`*

### 2. Frontend Setup (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
*Frontend dev server runs on `http://localhost:5173`*

---

## 🔒 Administrative Access & Security

- **Admin Portal**: Access `/admin` in the frontend web UI or query `/api/v1/admin/analytics/`.
- **Passcode Authentication**: Protected via `X-Admin-Passcode` header or `?passcode=` parameter. All sensitive inputs, credit card CVCs, and passwords are fully masked in the user interface.

---

## 📄 License
Copyright © 2026 SiPhBioLabChip Inc. All Rights Reserved.
