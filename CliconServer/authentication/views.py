from django.shortcuts import render
from .serializer import UserSerializer, LoginSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

# Create your views here.

# Sign up user api view
class RegistrationSerializerCreateView(generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  
  def post(self, request):
    username = request.data.get('username').lower()
    email = request.data.get('email')
    password = request.data.get('password')

    if User.objects.filter(username=username).exists():
      return Response({'error': 'Username already taken'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
      return Response({'error': 'Email already taken'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username, email, password)
    return Response({'message': 'User signed up successfully'}, status=status.HTTP_201_CREATED)



class RegistrationRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  lookup_field = 'pk'


# Log in user api view
class LoginView(APIView):
  def post(self, request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
      username = request.data.get('username')
      password = request.data.get('password')

      user = authenticate(request, username=username, password=password)

      if user is not None:
        login(request, user)
        logged_in_users = request.user
        return Response({'message':'Logged in successfuly', 'logged_in_users': 
        {'username': logged_in_users.username, 'email': logged_in_users.email}})
      
      return Response({"message": 'invalid crdentials'})
  