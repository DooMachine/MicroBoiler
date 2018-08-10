export const authConfig = {
    stsServer: 'http://localhost:5000',
    redirect_url: 'http://localhost:8000',
    client_id: 'IoClient',
    response_type: 'id_token token',
    scope: 'openid profile email',
    post_logout_redirect_uri: 'http://localhost:8000',
    start_checksession: true,
    silent_renew: true,
    silent_renew_url: 'http://localhost:8000/silent-renew.html',
    startup_route: '/',
    forbidden_route: '/',
    unauthorized_route: '/',
    log_console_warning_active: true,
    log_console_debug_active: true,
    max_id_token_iat_offset_allowed_in_seconds: '10',
  }