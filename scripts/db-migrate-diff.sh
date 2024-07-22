#!/bin/bash

# Diff the migrations against schema.prisma.

# Function to extract the value of an environment variable from a .env file.
get_env_var() {
  local var_name=$1
  local env_file=$2
  local var_value=$(grep -E "^${var_name}=" "$env_file" | cut -d '=' -f2-)
  echo $var_value
}

SHADOW_DATABASE_URL=$(get_env_var "SHADOW_DATABASE_URL" ".env.local")

# Set the target directory
migrations_dir="prisma/migrations"

npx prisma migrate diff \
  --from-migrations=${migrations_dir} \
  --to-schema-datamodel=prisma/schema.prisma \
  --shadow-database-url=${SHADOW_DATABASE_URL} \
  --script


