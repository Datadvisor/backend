server
{
    listen                  80;

    server_name             {{ NGINX_FRONTEND_URL }};
    server_tokens           off;

    location / {
        proxy_pass          http://127.0.0.1:{{ FRONTEND_PORT }}$request_uri;
        proxy_set_header    Host $host;
        proxy_set_header    X-Forwarded-For $remote_addr;
    }

    access_log              /var/log/nginx/{{ NGINX_FRONTEND_LOG_FILENAME }}.log;
    error_log              /var/log/nginx/{{ NGINX_FRONTEND_LOG_FILENAME }}_error.log;
}
