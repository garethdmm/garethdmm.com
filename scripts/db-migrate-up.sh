# TODO: have settings for local and prod conditionally.

export DATABASE_URL=$(grep -E '^DATABASE_URL=' .env.local | cut -d '=' -f2-)

echo $DATABASE_URL

prisma migrate dev

unset DATABASE_URL
