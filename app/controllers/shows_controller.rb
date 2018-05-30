class ShowsController < ApplicationController
	def index
		@shows = Show.all
	end

	def new
    	@show = Show.new
	end

	#Posts an article from (articles/new)
	def create
		#render plain: params[:article].inspect 
		@show = Show.new(show_params)
		@show.user = current_user
		if @show.save 
		    flash[:notice] = "Event was successfully created" 
		    redirect_to root_path
		else
		  render :new 
		end
	end

	#Page to edit (/articles/:id/edit)
	def edit
		@show = Show.find(params[:id])
	end


	#Posts the updated article (articles/:id)
	def update
		@show = Show.find(params[:id])
	    if @show.update(show_params)
	      flash[:notice] = "Event was successfully updated"
	      redirect_to root_path
	    else
	      render :edit
	    end
	end

	#Delete route (/articles/:id)
  	def destroy
	    @show = Show.find(params[:id])
	    @show.destroy
	    flash[:notice] = "Event was successfully deleted"
	    redirect_to root_path        
  	end



	private
	#method to add data to the database
    def show_params
      params.require(:show).permit(:shows) 
    end

end
