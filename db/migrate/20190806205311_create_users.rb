class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email
      t.string :password_digest, null: false
      t.string :session_token, null: false
    end
    add_index(:users, :username)
    add_index(:users, :password_digest)
    add_index(:users, :session_token)
    drop_table(:users_tables)
  end
end
