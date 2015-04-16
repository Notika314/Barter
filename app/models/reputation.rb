class Reputation < ActiveRecord::Base
  belongs_to :judge, :class_name => "User"
  belongs_to :teacher, :class_name => "User"
  validates :rating, presence: true

end
