class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.string :shows
      t.string :string
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
