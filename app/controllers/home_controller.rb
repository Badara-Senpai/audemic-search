# frozen_string_literal: true

class HomeController < ApplicationController
  def index

  end

  def search
    @results = Prompt.search_prompts(params[:query])
    render partial: "search_results", locals: { results: @results }
  end
end