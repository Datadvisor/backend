server
{
    listen                  80;

    server_name             {{ NGINX_API_URL }};
    server_tokens           off;

    location / {
        proxy_pass          http://127.0.0.1:{{ API_PORT }}$request_uri;
        proxy_set_header    Host $host;
        proxy_set_header    X-Forwarded-For $remote_addr;
    }

    access_log              /var/log/nginx/{{ NGINX_API_LOG_FILENAME }}.log;
    error_log              /var/log/nginx/{{ NGINX_API_LOG_FILENAME }}_error.log;
}
