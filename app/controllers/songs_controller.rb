class SongsController < ApplicationController
	def index
		@songs = Song.all
	end

	def new
      @song = Song.new
	end

	#Posts an article from (articles/new)
	def create
		#render plain: params[:article].inspect 
		@song = Song.new(song_params)
		@song.user = current_user
		if @song.save 
		    flash[:notice] = "Song was successfully created" 
		    redirect_to songs_path
		else
		  render :new 
		end
	end


	#Page to edit (/articles/:id/edit)
	def edit
		@song = Song.find(params[:id])
	end
	  
	#Posts the updated article (articles/:id)
	def update
		@song = Song.find(params[:id])
	    if @song.update(song_params)
	      flash[:notice] = "Song was successfully updated"
	      redirect_to songs_path
	    else
	      render :edit
	    end
	end

	#Delete route (/articles/:id)
  	def destroy
	    @song = Song.find(params[:id])
	    @song.destroy
	    flash[:notice] = "Song was successfully deleted"
	    redirect_to songs_path        
  	end

	private
	#method to add data to the database
    def song_params
      params.require(:song).permit(:song) 
    end

end