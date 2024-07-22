#!/bin/bash

# Set the target directory
migrations_dir="prisma/migrations"
migration_title=$1

# Function to extract the value of an environment variable from a .env file.
get_env_var() {
  local var_name=$1
  local env_file=$2
  local var_value=$(grep -E "^${var_name}=" "$env_file" | cut -d '=' -f2-)
  echo $var_value
}

get_next_migration_num() {
  # Set the target directory from the argument
  migrations_dir="$1"

  # Initialize the highest value to a very small number
  highest=-1

  # Loop through each directory in the target directory
  for dir in "$migrations_dir"/*/; do
    # Extract the integer value from the directory name
    value=$(basename "$dir" | grep -o '^[0-9]*')

    # If the extracted value is greater than the current highest value, update the highest value
    if [ "$value" -gt "$highest" ]; then
      highest="$value"
    fi
  done

  # Calculate the new directory number
  new_dir=$((highest + 1))

  # Output the next migration number
  echo "$new_dir"
}

SHADOW_DATABASE_URL=$(get_env_var "SHADOW_DATABASE_URL" ".env.local")

next_migration_num=$(get_next_migration_num $migrations_dir)

target_dir="${migrations_dir}/${next_migration_num}_${migration_title}"
target_file="${target_dir}/migration.sql"

mkdir $target_dir

npx prisma migrate diff \
  --from-migrations=prisma/migrations \
  --to-schema-datamodel=prisma/schema.prisma \
  --shadow-database-url=${SHADOW_DATABASE_URL} \
  --script > ${target_file}

echo $target_file