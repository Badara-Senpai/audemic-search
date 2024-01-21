class Prompt < ApplicationRecord
  searchkick

  def self.search_prompts(query)
    search(query)
  end
end
