from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _

class RegisterSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(
        write_only=True,
        style={'input_type': 'password'},
        error_messages={
            "blank": "Password is required.",
            "min_length": "Password must be at least 8 characters long.",
        }
    )
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password1', 'password2']

        extra_kwargs = {
            "username": {
                "error_messages": {
                    "blank": "Username is required.",
                    "unique": "This username is already taken."
                }
            },
            "email": {
                "error_messages": {
                    "blank": "Email is required.",
                    "invalid": "Enter a valid email address.",
                    "unique": "This email is already registered."
                }
            },
        }

    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError({
                "non_field_errors": ["Passwords do not match."]
            })
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password1']
        )
        return user

# login user serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(
        required=True,
        error_messages={
            "blank": "Username is required.",
            "required": "Username is required."
        }
    )
    password = serializers.CharField(
        required=True,
        style={"input_type": "password"},
        write_only=True,
        error_messages={
            "blank": "Password is required.",
            "required": "Password is required."
        }
    )

    def validate(self, data):
        username = data.get("username")
        password = data.get("password")

        if username and password:
            user = authenticate(username=username, password=password)

            if user is None:
                raise serializers.ValidationError(
                    {"detail": "Invalid username or password."}
                )

            if not user.is_active:
                raise serializers.ValidationError(
                    {"detail": "This account is disabled."}
                )

            data["user"] = user
            return data

        raise serializers.ValidationError(
            {"detail": "Both username and password are required."}
        )