web: gunicorn --bind 127.0.0.1:8000 trendallarchive trendallarchive.wsgi
python manage.py collectstatic --noinput
manage.py migrate