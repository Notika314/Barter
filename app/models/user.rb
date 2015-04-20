class User < ActiveRecord::Base
  has_secure_password
  has_many :talents
  has_many :offers, through: :timeslots
  has_many :timeslots
  has_many :reputations
  has_many :student_offers, class_name: 'Offer', :foreign_key => :student_id

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: true, format: {with: VALID_EMAIL_REGEX}
  validates :username, uniqueness: true

  def score
    self.reputations.average(:rating).to_f.round(2)
  end
end
