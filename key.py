import secrets

# Generate a secure random string of 32 bytes
secret_key = secrets.token_hex(32)

print("Generated Secret Key:", secret_key)
