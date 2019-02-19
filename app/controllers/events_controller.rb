class EventsController < ApplicationController
	def index
		@events = Event.all.order(:events)
	end

	def new
      @event = Event.new
	end

	#Posts an article from (articles/new)
	def create
		#render plain: params[:article].inspect 
		@event = Event.new(event_params)
		#only if Devise is set up
		@event.user = current_user
		if @event.save 
		    flash[:notice] = "Event was successfully created" 
		    redirect_to events_path
		else
		  render :new 
		end
	end


	#Page to edit (/articles/:id/edit)
	def edit
		@event = Event.find(params[:id])
	end
	  
	#Posts the updated article (articles/:id)
	def update
		@event = Event.find(params[:id])
	    if @event.update(event_params)
	      flash[:notice] = "Event was successfully updated"
	      redirect_to events_path
	    else
	      render :edit
	    end
	end

	#Delete route (/articles/:id)
  	def destroy
	    @event = Event.find(params[:id])
	    @event.destroy
	    flash[:notice] = "Event was successfully deleted"
	    redirect_to events_path        
  	end

	private
	#method to add data to the database
    def event_params
      params.require(:event).permit(:event) 
    end

end
