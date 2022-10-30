class HomesController < ApplicationController
  before_action :set_home, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token

  # GET /homes or /homes.json
  def index
  end

  # GET /homes/1 or /homes/1.json
  def show
  end

  # GET /homes/new
  def new
    @home = Home.new
  end

  # GET /homes/1/edit
  def edit
  end

  # POST /homes or /homes.json
  def create
    ActionCable.server.broadcast 'connection_channel', {data: params}
  end

  # PATCH/PUT /homes/1 or /homes/1.json
  def update
  
  end

  # DELETE /homes/1 or /homes/1.json
  def destroy
    @home.destroy

    respond_to do |format|
      format.html { redirect_to homes_url, notice: "Home was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_home
      @home = Home.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def home_params
      params.fetch(:home, {})
    end
end
