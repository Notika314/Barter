class TalentsController < ApplicationController

  def index
    @talents = Talent.all
    render json: @talents, include: :user
  end

  def show
    @talent = Talent.find_by(id: params[:id])
    render json: @talent
  end

  def edit
    @talent = Talent.find_by(id: params[:id])
    render json: @talent
  end

  def create
    @talent = Talent.create!(talent_params)
    redirect_to talent_path(@talent.id)
  end

  def for_user
    @talents = Talent.where(user_id: params[:user_id])
    render json: @talents
  end

  def update
    @talent = Talent.find_by(id: params[:id])
    @talent.update!(talent_params)
    render json: @talent
    # render :show
  end

  def destroy
    Talent.find_by(id: params[:id]).destroy
    redirect_to root_path
  end

  private
  def talent_params
    params.permit(:title, :type, :sample, :experience, :description, :image)
  end

end
