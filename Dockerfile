FROM ruby

WORKDIR /app/
COPY ./Gemfile ./Gemfile.lock ./

RUN gem install jekyll bundler
RUN bundle

CMD [ "bundle", "exec", "jekyll","serve",  "--host", "0.0.0.0", "--livereload" ]
