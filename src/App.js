import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

import { AuthProvider } from './context/AuthContext';

import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';

