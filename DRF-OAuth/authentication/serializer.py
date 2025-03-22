from rest_framework import serializers
from django.contrib.auth.models import User

# authentication serializer for User

class UserSerializer(serializers.ModelSerializer):
  email = serializers.EmailField()

  class Meta:
    model = User
    fields = ['id', 'username', 'email', 'password']
    extral_kwargs = {'password': {'write_only': True}}

# Log in serializer
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()