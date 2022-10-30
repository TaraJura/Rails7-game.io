class ConnectionChannel < ApplicationCable::Channel
  def subscribed
    stream_from "connection_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
